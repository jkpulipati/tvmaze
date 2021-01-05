import { shallowMount } from "@vue/test-utils";
import Shows from "@/components/Shows.vue";

describe("Shows.vue", () => {
  it("Test Vue instance", () => {
    const wrapper = shallowMount(Shows);
    expect(wrapper.isVueInstance()).toBeDefined();
  });
});
