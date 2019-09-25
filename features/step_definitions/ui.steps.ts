import { Ensure, equals } from '@serenity-js/assertions';
import { WithStage } from '@serenity-js/core';
import { LocalServer, StartLocalServer, StopLocalServer } from '@serenity-js/local-server';
import { Navigate, UseAngular, Website } from '@serenity-js/protractor';
import { After, Then, When } from 'cucumber';
import { open } from 'fs';
import { browser } from 'protractor';

When(/^(.*)Umbra is on google.com$/, function(this: WithStage, actorName: string) {
   return  this.stage.actor(actorName).attemptsTo(
     // UseAngular.enableSynchronisation(),
      UseAngular.disableSynchronisation(),
      Navigate.to("https://www.google.com/")
    );
});

