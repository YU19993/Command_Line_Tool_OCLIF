import {Args} from '@oclif/core';

export const actionArg = Args.string({
  name: 'action',
  required: true,
  description: 'ENTITY',
  options: ['quest'],
});

export const sourceArg = Args.string({
  name: 'source',
  required: true,
  description: 'data source',
  options: ['airtable', 'qd'],
});

export const destinationArg = Args.string({
  name: 'destination',
  required: true,
  description: 'data destination',
  options: ['qd', 'airtable'],
});
