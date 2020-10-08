import {
  parser,
  stringify
} from '@/code/parser'
// 写代码的时候，mocha+chai（断言库）
import {
  expect
} from 'chai'

// 要测试的方法
// 一个用例

// 常见的关系 相等 大于/小于 包含和不包含
describe('专门测试parser', () => {
  it('我要测试parser是否靠谱', () => {
    //  to.be 两边是否相等，equal === deep.equal
    // deep.equal 表示两个对象是否完全相等（y引用空间无所谓） 对象深度比较
    expect(parser('name=zfss')).to.be.deep.equal({
      name: 'zfss'
    })
  })
})
describe('专门测试stringify', () => {
  it('我要测试stringify是否靠谱', () => {
    expect(stringify({name:'afss'})).to.be.equal('name=afss')
  })
})
describe('测试方法', () => {
  it('相等关系', () => {
    expect(1 + 1).to.be.equal(2);
    expect([1,2,3]).to.be.lengthOf(3);
    expect(true).to.be.true;
  })
  it('包含', () => {
    expect('aafs').to.be.contain('af');
    expect('aafs').to.be.match(/af/);
  })
  it('大于 小于', () => {
    expect(5).to.be.greaterThan(3);
    expect(3).to.be.lessThan(5);
    expect(3).to.be.not.greaterThan(10);
  })
})