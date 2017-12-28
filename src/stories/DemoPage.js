import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./../components/Button";
import Grid from "./../components/Grid";
import Heading from "./../components/Typography/Heading";
import Link from "./../components/Typography/Link";
import Paragraph from "./../components/Typography/Paragraph";
import Quote from "./../components/Typography/Quote";
import Strong from "./../components/Typography/Strong";
import Category from "./../components/Typography/Category";
import Container from "./../components/Container";

storiesOf("Home", module).add("Overview", () => (
  <Grid type="general">
    <Container area="header" columnStart={1} columnEnd={4}>
      <Heading>Welcome to GIN</Heading>
      <Paragraph>
        <Strong>Gleichstrøm Industry Norm</Strong>
      </Paragraph>
    </Container>
    <Container area="header" columnStart={4}>
      <Heading type="H1" subheading>
        A Modular Component Library for rapid theme development
      </Heading>
    </Container>
    <Container area="main" columnEnd={4}>
      <Paragraph>
        GIN is a component library developed and designed by Dario Zadra &
        Johannes Bugiel. It follows the GIN web standard for perfectly readable
        and accessable website designs. It is used to rapidly prototype user
        interfaces and applications.
      </Paragraph>
    </Container>
    <Container area="main" columnStart={4}>
      <Paragraph>
        Visit <Link href="http://gleichstrom.in">Gleichstrøm</Link> to get more
        insights into the collectives work. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Primum in nostrane potestate est, quid
        meminerimus? Et quod est munus, quod opus sapientiae? Duo Reges:
        constructio interrete. Et harum quidem rerum facilis est et expedita
        distinctio. Quantum Aristoxeni ingenium consumptum videmus in musicis?
        Hoc non est positum in nostra actione. Utinam quidem dicerent alium alio
        beatiorem! Iam ruinas videres. Summum a vobis bonum voluptas dicitur. Et
        harum quidem rerum facilis est et expedita distinctio.
      </Paragraph>
    </Container>
    <Container area="footer">
      <Paragraph textAlign="center">© Gleichstrøm 2018</Paragraph>
    </Container>
  </Grid>
));
