#!/usr/bin/env node
import 'source-map-support/register';
import { App, Tags } from '@aws-cdk/core';
import { RunerCdkStack } from '../lib/runer-cdk-stack';

const app = new App();
const stack = new RunerCdkStack(app, 'RunerCdkStack', {
  env: {
    region: 'eu-west-1'
  }
});

Tags.of(stack).add('fremtind:CreatedBy', 'Designsystem');
Tags.of(stack).add('fremtind:CostCenter', '05530');
