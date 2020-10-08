import {
    expect
} from 'chai'
import {
    mount
} from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('测试counter组件', () => {
    it('测试 点击按钮能否加1', async () => {
        let wrapper = mount(Counter);
        expect(wrapper.find('#count').text()).to.be.equal('10');
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('#count').text()).to.be.equal('11');
    })
})