import { shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vue from "vue";

import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader.vue", () => {
  it("Tests vue instance", () => {
    Vue.use(VueRouter);
    const wrapper = shallowMount(AppHeader);
    expect(wrapper.isVueInstance()).toBeDefined();
  });
});
