// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import Slide from "../../components/slide/slide"
import SlideModel, { Status } from "../../models/slide"
import MarkdownParser from "../../logic/markdown-parser"

const parser = new MarkdownParser()

const createLayoutSlide = (color: number, layout: string, theme: string) => {
  const slide = new SlideModel()
  slide.theme_name = theme
  slide.layout = layout
  slide.color_variation = color
  slide.markdown =
    "# This is a super long title\n\n## This is a super really long subtitle"
  return slide
}

storiesOf("Components/Slides/Layouts", module)
  .addDecorator(story => <div style={{ width: 750 }}>{story()}</div>)
  .add("Picture Frame", () => (
    <div>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(1, "PictureFrame", "bebas")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(2, "PictureFrame", "fauna")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(3, "PictureFrame", "franklin")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(4, "PictureFrame", "league")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(5, "PictureFrame", "lobster")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(6, "PictureFrame", "ostrich")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(7, "PictureFrame", "oswald")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(8, "PictureFrame", "yanone")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(9, "PictureFrame", "yanone")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(10, "PictureFrame", "yanone")}
      />
    </div>
  ))
  .add("LeftTitle", () => (
    <div>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(1, "LeftTitle", "bebas")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(2, "LeftTitle", "fauna")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(3, "LeftTitle", "franklin")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(4, "LeftTitle", "league")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(5, "LeftTitle", "lobster")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(6, "LeftTitle", "ostrich")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(7, "LeftTitle", "oswald")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(8, "LeftTitle", "yanone")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(9, "LeftTitle", "yanone")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(10, "LeftTitle", "yanone")}
      />
    </div>
  ))
  .add("CircleTitle", () => (
    <div>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(1, "CircleTitle", "bebas")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(2, "CircleTitle", "fauna")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(3, "CircleTitle", "franklin")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(4, "CircleTitle", "league")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(5, "CircleTitle", "lobster")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(6, "CircleTitle", "ostrich")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(7, "CircleTitle", "oswald")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(8, "CircleTitle", "yanone")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(9, "CircleTitle", "yanone")}
      />
      <hr />
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createLayoutSlide(10, "CircleTitle", "yanone")}
      />
    </div>
  ))
