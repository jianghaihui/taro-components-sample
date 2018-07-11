import './swiper.scss'

import { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Switch,
  Slider
} from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: false,
      verticalIsCircular: false,
      isAutoplay: false,
      verticalIsAutoplay: false,
      hasIndicatorDots: true,
      verticalHasIndicatorDots: true,
    }
  }

  setAutoPlay = (e) => {
    this.setState({
      isAutoplay: e.detail.value
    })
  }

  setVerticalAutoPlay = (e) => {
    this.setState({
      verticalIsAutoplay: e.detail.value
    })
  }

  setCircular = (e) => {
    this.setState({
      isCircular: e.detail.value
    })
  }

  setVerticalCircular = (e) => {
    this.setState({
      verticalIsCircular: e.detail.value
    })
  }

  setIndicatorDots = e => {
    this.setState({
      hasIndicatorDots: e.detail.value
    })
  }

  setVerticalIndicatorDots = e => {
    this.setState({
      verticalHasIndicatorDots: e.detail.value
    })
  }

  setInterval = e => {
    this.setState({
      interval: e.detail.value
    })
  }

  setDuration = e => {
    this.setState({
      duration: e.detail.value
    })
  }

  render () {
    const { current, isAutoplay, duration,isCircular, interval, hasIndicatorDots, verticalIsCircular, verticalHasIndicatorDots, verticalIsAutoplay } = this.state
    return (
      <View className='container'>
        <Header title='Swiper'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>Swiper 横向滑动</Text>
            </View>
            <Swiper
              slideMult='10'
              className='test-h'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              current={current}
              duration={duration}
              interval={interval}
              circular={isCircular}
              autoplay={isAutoplay}
              indicatorDots={hasIndicatorDots}
              preMargin='20'>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(26,173,25);'>
                  A
                </View>
              </SwiperItem>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(39,130,215);'>
                  B
                </View>
              </SwiperItem>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(241,241,241);color: #333;'>
                  C
                </View>
              </SwiperItem>
            </Swiper>
          </View>
          <View className='page-section'>
            <View className='switch-list'>
              <View className='switch-list__item'>
                <View className='switch-list__text'>指示点</View>
                <Switch checked={hasIndicatorDots} onChange={this.setIndicatorDots} ></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>自动播放</View>
                <Switch checked={isAutoplay} onChange={this.setAutoPlay} ></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>循环播放</View>
                <Switch checked={isCircular} onChange={this.setCircular} ></Switch>
              </View>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>幻灯片切换时长(ms)</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider
                showValue
                step={1}
                min={500}
                max={2000}
                value={duration}
                onChange={this.setDuration}></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>自动播放间隔时长(ms)</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider
                showValue
                step={1}
                min={2000}
                max={10000}
                value={this.state.interval}
                onChange={this.setInterval} ></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>Swiper 纵向滑动</Text>
            </View>
            <Swiper
              slideMult='10'
              className='test-h'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              vertical
              circular={verticalIsCircular}
              indicatorDots={verticalHasIndicatorDots}
              autoplay={verticalIsAutoplay}
              preMargin='20'>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(26,173,25);'>
                  A
                </View>
              </SwiperItem>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(39,130,215);'>
                  B
                </View>
              </SwiperItem>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(241,241,241);color: #333;'>
                  C
                </View>
              </SwiperItem>
            </Swiper>
          </View>
          <View className='page-section'>
            <View className='switch-list'>
              <View className='switch-list__item'>
                <View className='switch-list__text'>指示点</View>
                <Switch checked={verticalHasIndicatorDots} onChange={this.setVerticalIndicatorDots} ></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>自动播放</View>
                <Switch checked={verticalIsAutoplay} onChange={this.setVerticalAutoPlay} ></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>循环播放</View>
                <Switch checked={verticalIsCircular} onChange={this.setVerticalCircular} ></Switch>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
