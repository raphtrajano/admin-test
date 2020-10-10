import * as React from "react";
import { Layout } from 'react-admin';
import { CustomAppBar } from './CustomAppBar';

export const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;
