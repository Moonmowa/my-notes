// Article.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px 30px;
  background-color: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
  border-left: 4px solid #3498db;
  padding-left: 12px;
`;

const Code = styled.pre`
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 12px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 12px 0;
`;

const List = styled.ul`
  margin-left: 20px;
  list-style-type: disc;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #e74c3c;
`;

const Article = () => {
  return (
    <Container>
      <Title>Why We Need the % Operator in JavaScript (The Reset Superpower)</Title>
      
      <Section>
        <p>
          When you first learn about the <Highlight>%</Highlight> operator in JavaScript, it’s often explained simply as the remainder operator:
        </p>
        <Code>console.log(10 % 3); // 1</Code>
        <p>
          But in real-world programming, <Highlight>%</Highlight> is not just about remainders — it’s the reset button.
          Whenever we want values to wrap around within a range (like hours on a clock, slides in a carousel, or looping counters), <Highlight>%</Highlight> is our best friend.
        </p>
      </Section>

      <Section>
        <Heading>Example 1: The Clock Reset</Heading>
        <p>
          A clock has 24 hours in a day. If you keep adding hours, the value should wrap around instead of going infinitely.
        </p>
        <Code>let hour = 25 % 24; // 1</Code>
        <p>So 25 % 24 = 1 → The clock resets after 24 hours.</p>
      </Section>

      <Section>
        <Heading>Example 2: Carousel Image Slider</Heading>
        <p>
          A carousel cycles through a set of images (say 5). When you go next after the last image, it should wrap back to the first.
        </p>
        <Code>let currentIndex = (currentIndex + 1) % images.length;</Code>
        <p>
          The <Highlight>%</Highlight> ensures that no matter how many times we increment, the index always stays inside [0 … length-1].
        </p>
      </Section>

      <Section>
        <Heading>Example 3: Increment & Decrement Counters</Heading>
        <p>Imagine a game score counter or a rotating dial.</p>
        <p>Increment Example:</p>
        <Code>counter = (counter + 1) % max;</Code>
        <p>Decrement Example (with safe modulus):</p>
        <Code>counter = ((counter - 1) % max + max) % max;</Code>
        <p>
          The <code>(x % max + max) % max</code> trick ensures positivity, even if <Highlight>%</Highlight> returns a negative.
        </p>
      </Section>

      <Section>
        <Heading>Key Takeaways</Heading>
        <List>
          <li>% is not just about remainders. It’s a looping mechanism.</li>
          <li>Great for:
            <List>
              <li>Clocks (hours reset after 24)</li>
              <li>Carousels (image index wraps around)</li>
              <li>Counters/Dials (values loop instead of overflow)</li>
              <li>Games (circular movement, reset mechanics)</li>
            </List>
          </li>
          <li>Always use the double-mod trick <code>((value % n) + n) % n</code> for negative safety.</li>
        </List>
      </Section>

      <Section>
        <p><Highlight>% = The Reset Superpower</Highlight></p>
      </Section>
    </Container>
  );
};

export default Article;
