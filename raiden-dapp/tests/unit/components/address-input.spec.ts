jest.mock('@/services/raiden-service');
jest.useFakeTimers();

import flushPromises from 'flush-promises';
import { $identicon } from '../utils/mocks';
import store from '@/store';
import { mount, Wrapper } from '@vue/test-utils';
import AddressInput from '@/components/AddressInput.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import { mockInput } from '../utils/interaction-utils';
import RaidenService from '@/services/raiden-service';
import Mocked = jest.Mocked;

Vue.use(Vuetify);

describe('AddressInput', function() {
  let wrapper: Wrapper<AddressInput>;
  let raiden: Mocked<RaidenService>;

  const excludeAddress: string = '0x65E84e07dD79F3f03d72bc0fab664F56E6C55909';
  const blockAddress: string = '0x123456789009876543211234567890';

  function vueFactory(value: string = '', excluded?: string, blocked?: string) {
    return mount(AddressInput, {
      sync: false,
      propsData: {
        value,
        exclude: excluded ? [excluded] : undefined,
        block: blocked ? [blocked] : undefined
      },
      mocks: {
        $raiden: raiden,
        $identicon: $identicon(),
        $t: (msg: string) => msg
      }
    });
  }

  beforeEach(() => {
    raiden = new RaidenService(store) as Mocked<RaidenService>;
  });

  it('should show no validation messages', () => {
    wrapper = vueFactory('', excludeAddress, blockAddress);
    const messages = wrapper.find('.v-messages__message');
    expect(wrapper.props().value).toBe('');
    expect(messages.exists()).toBe(true);
    expect(messages.text()).toBe('');
  });

  it('should show a this address cannot be an empty message', async () => {
    wrapper = vueFactory('', excludeAddress, blockAddress);
    mockInput(wrapper, '0x21b');
    await wrapper.vm.$nextTick();
    mockInput(wrapper);
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual(['']);
    expect(wrapper.emitted().input[1]).toEqual(undefined);

    const messages = wrapper.find('.v-messages__message');
    expect(messages.exists()).toBe(true);
    expect(messages.text()).toBe('address-input.error.empty');
  });

  it('should should show a no valid address message', async () => {
    wrapper = vueFactory('', excludeAddress, blockAddress);
    mockInput(wrapper, '0x21b');
    await wrapper.vm.$nextTick();

    const messages = wrapper.find('.v-messages__message');
    expect(messages.exists()).toBe(true);
    expect(messages.text()).toBe('address-input.error.invalid-address');
  });

  it('should should show a not checksum format message if address not in checksum format', async () => {
    wrapper = vueFactory('', excludeAddress, blockAddress);
    mockInput(wrapper, '0x774afb0652ca2c711fd13e6e9d51620568f6ca82');
    await wrapper.vm.$nextTick();

    const messages = wrapper.find('.v-messages__message');
    expect(messages.exists()).toBe(true);
    expect(messages.text()).toBe('address-input.error.no-checksum');
  });

  test('valid checksum address should fire input event', async () => {
    wrapper = vueFactory('', excludeAddress, blockAddress);
    mockInput(wrapper, '0x1D36124C90f53d491b6832F1c073F43E2550E35b');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([
      '0x1D36124C90f53d491b6832F1c073F43E2550E35b'
    ]);
  });

  test('setting a valid address should render a blockie', async () => {
    wrapper = vueFactory('', excludeAddress, blockAddress);
    wrapper.setProps({ value: '0x1D36124C90f53d491b6832F1c073F43E2550E35b' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$identicon.getIdenticon).toHaveBeenCalled();
  });

  describe('resolving ens names', () => {
    test('successfully resolved', async () => {
      wrapper = vueFactory('', excludeAddress, blockAddress);
      raiden.ensResolve = jest
        .fn()
        .mockResolvedValue('0x1D36124C90f53d491b6832F1c073F43E2550E35b');
      mockInput(wrapper, 'ens');
      await wrapper.vm.$nextTick();
      mockInput(wrapper, 'enstest');
      await wrapper.vm.$nextTick();
      mockInput(wrapper, 'enstest.test');
      await wrapper.vm.$nextTick();
      jest.runAllTimers();
      await flushPromises();

      expect(wrapper.vm.$data.hint).toEqual(
        '0x1D36124C90f53d491b6832F1c073F43E2550E35b'
      );
      expect(wrapper.emitted().input).toBeTruthy();
      expect(wrapper.emitted().input[0]).toEqual([
        '0x1D36124C90f53d491b6832F1c073F43E2550E35b'
      ]);

      expect(wrapper.vm.$data.errorMessages).toHaveLength(0);
    });

    test('could not resolve an address', async () => {
      wrapper = vueFactory('', excludeAddress, blockAddress);
      raiden.ensResolve = jest.fn().mockResolvedValue(null);

      mockInput(wrapper, 'enstest.test');
      await wrapper.vm.$nextTick();
      jest.runAllTimers();
      await flushPromises();

      expect(wrapper.vm.$data.hint).toEqual('');
      expect(wrapper.emitted().input).toBeTruthy();
      expect(wrapper.emitted().input[0]).toEqual([undefined]);

      expect(wrapper.vm.$data.errorMessages).toHaveLength(1);
      expect(wrapper.vm.$data.errorMessages).toContain(
        'address-input.error.ens-resolve-failed'
      );
    });

    test('failed to resolve an address', async () => {
      wrapper = vueFactory('', excludeAddress, blockAddress);
      raiden.ensResolve = jest
        .fn()
        .mockRejectedValue(Error('something went wrong'));

      mockInput(wrapper, 'enstest.test');
      await wrapper.vm.$nextTick();
      jest.runAllTimers();
      await flushPromises();

      expect(wrapper.vm.$data.hint).toEqual('');
      expect(wrapper.emitted().input).toBeTruthy();
      expect(wrapper.emitted().input[0]).toEqual([undefined]);

      expect(wrapper.vm.$data.errorMessages).toHaveLength(1);
      expect(wrapper.vm.$data.errorMessages).toContain(
        'address-input.error.ens-resolve-failed'
      );
    });
  });

  describe('exclude & block address', () => {
    it('should show error message if excluded address is entered', async () => {
      wrapper = vueFactory('', excludeAddress, blockAddress);
      mockInput(wrapper, excludeAddress);
      await wrapper.vm.$nextTick();

      const messages = wrapper.find('.v-messages__message');
      expect(messages.exists()).toBe(true);
      expect(messages.text()).toBe(
        'address-input.error.invalid-excluded-address'
      );
    });

    it('should show error message if blocked address is entered', async () => {
      wrapper = vueFactory('', excludeAddress, blockAddress);
      mockInput(wrapper, blockAddress);
      await wrapper.vm.$nextTick();

      const messages = wrapper.find('.v-messages__message');
      expect(messages.exists()).toBe(true);
      expect(messages.text()).toBe('address-input.error.channel-not-open');
    });

    it('should not show error message if there is no exclude or block prop', async () => {
      wrapper = vueFactory();

      mockInput(wrapper, excludeAddress);
      await wrapper.vm.$nextTick();

      const messages = wrapper.find('.v-messages__message');
      expect(messages.exists()).toBe(false);
    });
  });

  describe('internal value should react to model changes', () => {
    test('invalid value should not update address', () => {
      wrapper = vueFactory('0xsdajlskdj');
      expect(wrapper.vm.$data.address).toBe('');
    });

    test('valid value should update address', () => {
      wrapper = vueFactory('0x1D36124C90f53d491b6832F1c073F43E2550E35b');
      expect(wrapper.vm.$data.address).toBe(
        '0x1D36124C90f53d491b6832F1c073F43E2550E35b'
      );
    });

    test('address should be updated on valid changes', async () => {
      wrapper = vueFactory();
      expect(wrapper.vm.$data.address).toBe('');
      wrapper.setProps({ value: '0x1D36124C90f53d491b6832F1c073F43E2550E35b' });
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.$data.address).toBe(
        '0x1D36124C90f53d491b6832F1c073F43E2550E35b'
      );
    });

    test('address should not be updated on invalid changes', async () => {
      wrapper = vueFactory();
      expect(wrapper.vm.$data.address).toBe('');
      wrapper.setProps({ value: '0x1aaaaaadshjd' });
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.$data.address).toBe('');
    });
  });
});