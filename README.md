# Runer

Runer er lettvekts programvare for å teste lesbarheten til en skrifttype i ulike farger og størrelser. Den gjør dette ved å be brukeren om å lese tekster, og ta tiden fra teksten vises til brukeren klikker "neste". Ulike brukere får samme tekst med ulik skriftstørrelse og bakgrunnsfarge. Dermed kan vi sammenligne og trekke ut regler som "unngå 12px tekst på svart bakgrunn" og legge til ro diskusjoner som "er varde-fargen egnet til å brukes som  bakgrunnsfarge for brødtekst?"

## Teknisk implementasjon

Runer baserer seg på en AWS-dreven backend hvor frontend er en statisk React applikasjon i form av en SPA.

### Frontend

Frontenden bruker creat-react-app og det eneste man trenger er å ha `node` og `yarn` installert. For å sette opp og bygge prosjektet kan man gjøre

```
cd user-front
yarn
yarn build
```


### AWS

AWS-stacken kan kjøres opp programmatisk med CDK. For å gjøre dette må man ha `aws-cli` og `cdk` installert i kommandolinjen. Man må også være innlogget med aws-cli før man kan kjøre kommandoer mot AWS.


#### Miljøvariabler

```
RUNER_IO_CERT: ARNet til sertifikat for domenet satt opp i CloudFront
```

#### Oppsett

Første gang man setter opp stacken må man kjøre `cdk bootstrap` før man kan deploye:

*NOTIS: Det er viktig å ha bygd frontenden før man bygger backenden*

```
cd backend
yarn
yarn build
cdk bootstrap
cdk deploy
```

Etter førstegangsoppsettet trenger man ikke lenger å bruke bootstrap.

CDK vil sette opp stacken, spinne opp det som kreves av instanser og binde disse sammen. Den vil også opprette en lambda hvor APIet kjører, samt flytte frontend-koden til en S3-bucket og legge denne back CloudFront.

## Support

For support i Fremtind kan man kontakte Cloud Core Team på Slack.

For support for ekstern bruk kan man opprette issue på GitHub.
