import React from 'react';
import styled from 'styled-components/macro';

interface TextProps {
  content?: string | JSX.Element;
  props?: any;
  className?: string;
  children?: JSX.Element;
}

const TextWrapper = styled.div`
    margin-top: 0;
    margin-bottom: 1em;
`;

const Text = (props: TextProps) => (
  <TextWrapper {...props}>
    {props.content}
    {props.children}
  </TextWrapper>
);

export { Text };
