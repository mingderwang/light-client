import flushPromises from 'flush-promises';

jest.mock('vue-router');

import { createLocalVue, mount, shallowMount, Wrapper } from '@vue/test-utils';
import Channels from '@/views/Channels.vue';
import Vuex from 'vuex';
import { TestData } from '../data/mock-data';
import Vuetify from 'vuetify';
import { addElemWithDataAppToBody } from '../utils/dialog';
import Filters from '@/filters';
import Vue from 'vue';
import store from '@/store';
import { $identicon } from '../utils/mocks';
import RaidenService from '@/services/raiden-service';
import Mocked = jest.Mocked;
import { RouteNames } from '@/route-names';
import VueRouter from 'vue-router';

Vue.use(Vuetify);

describe('Channels.vue', () => {
  addElemWithDataAppToBody();

  let raidenService: Mocked<RaidenService>;
  let router: Mocked<VueRouter>;
  let wrapper: Wrapper<Channels>;
  let vuetify: typeof Vuetify;

  store.commit('updateChannels', TestData.mockChannels);
  store.commit('updateTokens', TestData.mockTokens);

  function createFactory(
    token: string = '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    shallow: boolean = false
  ) {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.filter('displayFormat', Filters.displayFormat);

    let options = {
      localVue,
      vuetify,
      store,
      mocks: {
        $router: router,
        $route: TestData.mockRoute({
          token
        }),
        $raiden: raidenService,
        $identicon: $identicon(),
        $t: (msg: string) => msg
      }
    };

    if (shallow) {
      return shallowMount(Channels, options);
    }
    return mount(Channels, options);
  }

  beforeEach(() => {
    router = new VueRouter() as Mocked<VueRouter>;
    router.push = jest.fn().mockResolvedValue(undefined);

    raidenService = new RaidenService(store) as Mocked<RaidenService>;
    raidenService.fetchTokenData = jest.fn().mockResolvedValue(undefined);
    raidenService.connect = jest.fn().mockResolvedValue(undefined);

    vuetify = new Vuetify();
  });

  afterEach(() => {
    router.push.mockReset();
  });

  test('renders the test data', () => {
    wrapper = createFactory();
    expect(wrapper.findAll('.channel-list__channels__channel').length).toEqual(
      2
    );
  });

  test('dismiss the confirmation when overlay is pressed', () => {
    wrapper = createFactory();
    wrapper.setData({
      visible: 'channel-278-deposit'
    });

    expect(wrapper.vm.$data['visible']).toBe('channel-278-deposit');
    wrapper.find('.channels__overlay').trigger('click');
    expect(wrapper.vm.$data['visible']).toBe('');
  });

  test('navigate home if address is not in checksum format', async () => {
    wrapper = createFactory('0xd0a1e359811322d97991e03f863a0c30c2cf029c', true);
    await wrapper.vm.$nextTick();
    await flushPromises();

    expect(router.push).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith(
      expect.objectContaining({
        name: RouteNames.HOME
      })
    );
  });

  test('navigate home if token is not found', async () => {
    wrapper = createFactory('0x111157460c0F41EfD9107239B7864c062aA8B978', true);
    await wrapper.vm.$nextTick();
    await flushPromises();

    expect(router.push).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith(
      expect.objectContaining({
        name: RouteNames.HOME
      })
    );
  });
});