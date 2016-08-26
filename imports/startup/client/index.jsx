import React from 'react';
import {mount} from 'react-mounter';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Routes} from './routes';

injectTapEventPlugin();

Meteor.startup(() => {
  mount(Routes);
});
