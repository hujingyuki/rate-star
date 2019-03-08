/** @format */

import { mount } from '@vue/test-utils';
import Index from '../src/index';

describe('component 测试', () => {
  const wrapper = mount(Index, {
    propsData: {
      pcount: 3
    }
  });

  it('检查初始化数据渲染', () => {
    expect(wrapper.html()).toContain('<p>The counter is set to <b>5</b>.</p>');
  });

  it('检查是否存在按钮', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('测试点击添加按钮计数正确显示', () => {
    const btns = wrapper.findAll('button');
    expect(wrapper.vm.counter).toBe(5);

    btns.at(0).trigger('click');
    expect(wrapper.vm.counter).toBe(6);

    btns.at(1).trigger('click');
    expect(wrapper.vm.counter).toBe(5);
  });

  it('测试props是否正确显示', () => {
    expect(wrapper.vm.pcount).toBe(3);
    expect(wrapper.html()).toContain('<p>Props data 3</p>');
  });
});
