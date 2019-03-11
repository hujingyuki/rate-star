/** @format */

import { mount } from '@vue/test-utils';
import Index from '../src/index';

describe('component 测试', () => {
  const wrapper = mount(Index, {
    propsData: {
      // count: 10,
      // space: 10,
      // defalutValue: 5
    }
  });

  it('检查Dom渲染', () => {
    //是否包含ul容器
    expect(wrapper.html()).toContain('<ul class="rate">');
    //是否包含星星li
    expect(wrapper.contains('li')).toBe(true);
  });

  it('检查默认星星数量', () => {
    //找到所有的星星li
    const lis = wrapper.findAll('li');
    //检查默认星星个数
    expect(lis.length).toBe(5);
    expect(wrapper.vm.count).toBe(5);
  });

  it('检查默认星星间距', () => {   
    //找到星星之间的间距
    const margin = wrapper.findAll('li').at(0).attributes();
    //检查默认间距
    expect(margin.style).toBe('margin-right: 5px;');
    expect(wrapper.vm.space).toBe(5);
  });

  it('检查默认选中星星的数量', () => {
    //找到所有的选中的星星
    const checked = wrapper.findAll('.checked');
    //检查默认选中星星个数
    expect(checked.length).toBe(0);
    expect(wrapper.vm.defaultValue).toBe(0);
  });

  it('测试设置星星个数', () => {
    wrapper.setProps({count: 0});
    //找到所有的选中的星星
    const _lis_ = wrapper.findAll('li');
    //检查星星个数
    expect(_lis_.length).toBe(0);
    expect(wrapper.vm.count).toBe(0);

    wrapper.setProps({count: 10});
    //找到所有的选中的星星
    const lis = wrapper.findAll('li');
    //检查星星个数
    expect(lis.length).toBe(10);
    expect(wrapper.vm.count).toBe(10);

    wrapper.setProps({count: 3});
    //找到所有的选中的星星
    const _lis = wrapper.findAll('li');
    //检查星星个数
    expect(_lis.length).toBe(3);
    expect(wrapper.vm.count).toBe(3);

  });

  it('测试设置星星间距', () => {
    wrapper.setProps({space: 10});
    const margin = wrapper.findAll('li').at(0).attributes();
    //检查间距
    expect(margin.style).toBe('margin-right: 10px;');
    expect(wrapper.vm.space).toBe(10);
    
    wrapper.setProps({space: 20});
    const _margin = wrapper.findAll('li').at(0).attributes();
    //检查间距
    expect(_margin.style).toBe('margin-right: 20px;');
    expect(wrapper.vm.space).toBe(20);
  });

  it('测试设置选中星星的数量', () => {
    wrapper.setProps({defaultValue: 1});
    //找到所有的选中的星星
    const checked = wrapper.findAll('.checked');
    //检查选中星星个数
    expect(checked.length).toBe(1);
    expect(wrapper.vm.defaultValue).toBe(1);

    const lis = wrapper.findAll('li');
    //检查星星个数
    expect(lis.length).toBe(3);

    wrapper.setProps({defaultValue: 3});
    const checked1 = wrapper.findAll('.checked');
    expect(checked1.length).toBe(3);
    expect(wrapper.vm.defaultValue).toBe(3);

    //默认选中的个数大于当前星星的数量
    wrapper.setProps({defaultValue: 5});
    //找到所有的选中的星星
    const checked2 = wrapper.findAll('.checked');
    //检查选中星星个数
    expect(checked2.length).toBe(3); //当前只有3个星星
    expect(wrapper.vm.defaultValue).toBe(5);
  });

  it('测试星星点击事件', () => {
    const lis = wrapper.findAll('li');
    lis.at(0).trigger('click');
    expect(wrapper.vm.value).toBe(1);
    const checked = wrapper.findAll('.checked');
    //检查选中星星个数
    expect(checked.length).toBe(1);

    lis.at(2).trigger('click');
    expect(wrapper.vm.value).toBe(3);
    const _checked = wrapper.findAll('.checked');
    //检查选中星星个数
    expect(_checked.length).toBe(3);
  })
});
