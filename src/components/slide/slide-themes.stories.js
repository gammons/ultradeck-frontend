// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../../components/slide/slide"
import SlideModel, { Status } from "../../models/slide"

const parser = new MarkdownParser()

const createSlide = (color: number, theme: string) => {
  const slide = new SlideModel()
  slide.theme_name = theme
  slide.color_variation = color
  slide.markdown =
    "# Hello *there*!\n* This is *emphasized*\n* And this is **bolded**"
  return slide
}

storiesOf("Components/Slides/Themes", module)
  .addDecorator(story => <div style={{ width: 750 }}>{story()}</div>)
  .add("Bebas", () => (
    <div>
      <h1>Color 1</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(1, "bebas")}
      />
      <h1>Color 2</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(2, "bebas")}
      />
      <h1>Color 3</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(3, "bebas")}
      />
      <h1>Color 4</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(4, "bebas")}
      />
      <h1>Color 5</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(5, "bebas")}
      />
      <h1>Color 6</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(6, "bebas")}
      />
      <h1>Color 7</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(7, "bebas")}
      />
      <h1>Color 8</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(8, "bebas")}
      />
    </div>
  ))
  .add("Fauna", () => (
    <div>
      <h1>Color 1</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(1, "fauna")}
      />
      <h1>Color 2</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(2, "fauna")}
      />
      <h1>Color 3</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(3, "fauna")}
      />
      <h1>Color 4</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(4, "fauna")}
      />
      <h1>Color 5</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(5, "fauna")}
      />
      <h1>Color 6</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(6, "fauna")}
      />
      <h1>Color 7</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(7, "fauna")}
      />
      <h1>Color 8</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(8, "fauna")}
      />
    </div>
  ))
  .add("Franklin", () => (
    <div>
      <h1>Color 1</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(1, "franklin")}
      />
      <h1>Color 2</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(2, "franklin")}
      />
      <h1>Color 3</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(3, "franklin")}
      />
      <h1>Color 4</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(4, "franklin")}
      />
      <h1>Color 5</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(5, "franklin")}
      />
      <h1>Color 6</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(6, "franklin")}
      />
      <h1>Color 7</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(7, "franklin")}
      />
      <h1>Color 8</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(8, "franklin")}
      />
    </div>
  ))
  .add("League", () => (
    <div>
      <h1>Color 1</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(1, "league")}
      />
      <h1>Color 2</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(2, "league")}
      />
      <h1>Color 3</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(3, "league")}
      />
      <h1>Color 4</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(4, "league")}
      />
      <h1>Color 5</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(5, "league")}
      />
      <h1>Color 6</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(6, "league")}
      />
      <h1>Color 7</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(7, "league")}
      />
      <h1>Color 8</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(8, "league")}
      />
    </div>
  ))
  .add("Lobster", () => (
    <div>
      <h1>Color 1</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(1, "lobster")}
      />
      <h1>Color 2</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(2, "lobster")}
      />
      <h1>Color 3</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(3, "lobster")}
      />
      <h1>Color 4</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(4, "lobster")}
      />
      <h1>Color 5</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(5, "lobster")}
      />
      <h1>Color 6</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(6, "lobster")}
      />
      <h1>Color 7</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(7, "lobster")}
      />
      <h1>Color 8</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(8, "lobster")}
      />
    </div>
  ))
  .add("Ostrich", () => (
    <div>
      <h1>Color 1</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(1, "ostrich")}
      />
      <h1>Color 2</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(2, "ostrich")}
      />
      <h1>Color 3</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(3, "ostrich")}
      />
      <h1>Color 4</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(4, "ostrich")}
      />
      <h1>Color 5</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(5, "ostrich")}
      />
      <h1>Color 6</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(6, "ostrich")}
      />
      <h1>Color 7</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(7, "ostrich")}
      />
      <h1>Color 8</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(8, "ostrich")}
      />
    </div>
  ))
  .add("Oswald", () => (
    <div>
      <h1>Color 1</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(1, "oswald")}
      />
      <h1>Color 2</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(2, "oswald")}
      />
      <h1>Color 3</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(3, "oswald")}
      />
      <h1>Color 4</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(4, "oswald")}
      />
      <h1>Color 5</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(5, "oswald")}
      />
      <h1>Color 6</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(6, "oswald")}
      />
      <h1>Color 7</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(7, "oswald")}
      />
      <h1>Color 8</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(8, "oswald")}
      />
    </div>
  ))
  .add("Yanone", () => (
    <div>
      <h1>Color 1</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(1, "yanone")}
      />
      <h1>Color 2</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(2, "yanone")}
      />
      <h1>Color 3</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(3, "yanone")}
      />
      <h1>Color 4</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(4, "yanone")}
      />
      <h1>Color 5</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(5, "yanone")}
      />
      <h1>Color 6</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(6, "yanone")}
      />
      <h1>Color 7</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(7, "yanone")}
      />
      <h1>Color 8</h1>
      <Slide
        slideStatus={Status.Current}
        parser={parser}
        slide={createSlide(8, "yanone")}
      />
    </div>
  ))
