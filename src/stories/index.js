import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./../components/Button";
import Heading from "./../components/Typography/Heading";
import Link from "./../components/Typography/Link";
import Paragraph from "./../components/Typography/Paragraph";
import Quote from "./../components/Typography/Quote";
import Strong from "./../components/Typography/Strong";
import Category from "./../components/Typography/Category";

storiesOf("Button", module)
  .add("Button Normal", () => <Button text="Buy Now" />)
  .add("Button CTA", () => <Button text="Buy Now" type="cta" />)
  .add("Button CTA Small", () => <Button text="Buy Now" type="ctaSmall" />);

storiesOf("Typography", module)
  .add("Headings", () => (
    <div>
      <Heading type="H1"> Heading H1 </Heading>
      <Heading type="H1" subheading>
        Heading H1 Subheading
      </Heading>
      <Heading type="H2">Heading H2</Heading>
      <Heading type="H3">Heading H3</Heading>
    </div>
  ))
  .add("Link", () => <Link href="www.google.de">Click me</Link>)
  .add("Paragraph", () => (
    <Paragraph href="www.google.de">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque ad tempus
      ad Pisonem omnes. Negat enim summo bono afferre incrementum diem. Sin
      tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Et quod
      est munus, quod opus sapientiae? Duo Reges: constructio interrete. Ergo
      illi intellegunt quid Epicurus dicat, ego non intellego? Conferam tecum,
      quam cuique verso rem subicias; Atque ut ceteri dicere existimantur melius
      quam facere, sic hi mihi videntur facere melius quam dicere. At quanta
      conantur! Mundum hunc omnem oppidum esse nostrum! Incendi igitur eos, qui
      audiunt, vides. Inscite autem medicinae et gubernationis ultimum cum
      ultimo sapientiae comparatur. Hoc loco tenere se Triarius non potuit.
      Omnia peccata paria dicitis.
    </Paragraph>
  ))
  .add("Quote", () => (
    <Quote cite="Some German Dude">Form Follows Functionality</Quote>
  ))
  .add("Strong", () => <Strong>Look At Me I'm bold!</Strong>)
  .add("Category", () => (
    <div>
      <Category primary>Primary Category</Category>
      <br />
      <Category>Some Category</Category>
    </div>
  ));
