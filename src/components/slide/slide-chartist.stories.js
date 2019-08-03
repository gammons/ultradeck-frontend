import * as React from 'react'
import { storiesOf } from '@storybook/react'

import MarkdownParser from '../../logic/markdown-parser'
import Slide from '../../components/slide/slide'
import SlideModel, { Status } from '../../models/slide'

const parser = new MarkdownParser()

const chart = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Historic and Estimated Worldwide Population Growth by Region'
  },
  subtitle: {
    text: 'Source: Wikipedia.org'
  },
  xAxis: {
    categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'Billions'
    },
  },
  tooltip: {
    split: true,
    valueSuffix: ' millions'
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      }
    }
  },
  series: [{
    name: 'Asia',
    data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
    name: 'Africa',
    data: [106, 107, 111, 133, 221, 767, 1766]
  }, {
    name: 'Europe',
    data: [163, 203, 276, 408, 547, 729, 628]
  }, {
    name: 'America',
    data: [18, 31, 54, 156, 339, 818, 1201]
  }, {
    name: 'Oceania',
    data: [2, 2, 2, 6, 13, 30, 46]
  }]
}

const createSlide = (color: number, markdown: string): SlideModel => {
  const slide = new SlideModel()
  slide.theme_name = 'bebas'
  slide.color_variation = color
  slide.markdown = markdown
  return slide
}

const codeMarkdown = "```chart \n "+JSON.stringify(chart)+"\n```"

const slideJsTheme1 = createSlide(1, codeMarkdown)
const slideJsTheme2 = createSlide(2, codeMarkdown)
const slideJsTheme3 = createSlide(3, codeMarkdown)
const slideJsTheme4 = createSlide(4, codeMarkdown)
const slideJsTheme5 = createSlide(5, codeMarkdown)
const slideJsTheme6 = createSlide(6, codeMarkdown)
const slideJsTheme7 = createSlide(7, codeMarkdown)
const slideJsTheme8 = createSlide(8, codeMarkdown)

storiesOf('Components/Slides/Markdown/Charts', module)
  .add('color 1', () => (
    <div style={{width: 750}}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme1}
        parser={parser}
      />
    </div>
  ))
  .add('color 2', () => (
    <div style={{width: 750}}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme2}
        parser={parser}
      />
    </div>
  ))
  .add('color 3', () => (
    <div style={{width: 750}}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme3}
        parser={parser}
      />
    </div>
  ))
  .add('color 4', () => (
    <div style={{width: 750}}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme4}
        parser={parser}
      />
    </div>
  ))
  .add('color 5', () => (
    <div style={{width: 750}}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme5}
        parser={parser}
      />
    </div>
  ))
  .add('color 6', () => (
    <div style={{width: 750}}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme6}
        parser={parser}
      />
    </div>
  ))
  .add('color 7', () => (
    <div style={{width: 750}}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme7}
        parser={parser}
      />
    </div>
  ))
  .add('color 8', () => (
    <div style={{width: 750}}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme8}
        parser={parser}
      />
    </div>
  ))
