 ## BUILD

Gerar o build
 sudo ng build

Para verificar se está executado (obrigatório estar dentro da pasta no dist/...)
  http-server

Deploy do build no firebase:
  firebase init
    configurando:
      Hosting (escolhe com barra espaço, Enter confirma)
      Escolhe o diretório public (dist/pasta)
      Sigle-page: y
      Overwite index.html: n
  firebase deploy
 
 Para multi host configurar:
        no arquivo firebase.json colar de acordo com a configuração do hosting:
            "site": "jardimveneza",
        No arquivo .firebasesc alterar para o nome do host,
            "default": "bairrofeliz103"
        Depois de configurado executar o deploy da seguinte maneira:
             `sudo ng build --prod && sudo firebase deploy --only hosting:jardimveneza`

# INSTALAÇÃO

### Preparando o ambiente de trabalho:

instalar o vscode linux com snap: sudo snap install --classic code
talvez seja necessário instalar: sudo apt-get install snapd

instalar o apt-get: sudo apt-get install
instalar o npm: sudo apt install npm

verificar se foram instalados:
nodejs -v
npm -v
Angular CLI: ng version

Atualizar:

Node estável:
    Instalar o nodejs: sudo apt install nodejs
e
    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable
    ou
    sudo n 10.16.3
    atual 8.10.0

Angular CLI
    Remover versão anterior: sudo rm -rf /usr/local/bin/ng
    instalar o CLI: sudo npm install -g @angular/cli

Atualizar: 
    npm install -g npm
ou 
    **UTILIZAR ESSE COMANDO APÓS CLONAR O PROJETO:**
    `npm install`
ou
    ng update
    ng update --all --allow-dirty

firebase
    firebase projects:list



## FAZER UPGRADE PARA VERSÃO 9 (débito técnico que não vale a pena resolver agora)

atualizar package e bibliote do projeto:
    npm uninstall --save-dev angular-cli
    npm install --save-dev @angular/cli@latest

        npm install --save-dev @angular/compiler-cli@latest @angular/language-service@latest @angular-devkit/build-angular@latest @types/node@latest typescript@latest

    npm install --save @angular/cdk@latest
    npm install --save @angular/core@latest
    npm install --save @angular/material@latest
    npm install --save @angular/rxjs@latest
    npm install --save @angular/animations@latest
    npm install --save @angular/common@latest
    npm install --save @angular/compiler@latest
    npm install --save @angular/forms@latest

    npm install --save @angular/router@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest rxjs@latest

    npm install --save @angular/service-worker@latest  @angular/flex-layout@latest
    sudo npm install --save
    @types/node

 npm uninstall --save-dev typescript
 sudo npm install --save-dev typescript@insiders


## GENERATE
    Para criar novas estruturas (eu não gosto de usar, faço na mão)

    Criando a estrutura de uma páginas que compõem o projeto
    componentes: ng g c forma-pag-dialog
    ou
    componentes: ng g c forma-pag-dialog --skip-import
    Service: ng g s pedidos
    Interface: ng g i cliente
    Guard: ng g g auth

## APIs
  Para input:
  https://www.npmjs.com/package/ngx-material-file-input
   npm i ngx-material-file-input

   demo: https://merlosy.github.io/ngx-material-file-input/

  Outra opção não usada de input: 
  npm i angular-material-fileupload
  https://nishantmc.github.io/angular-material-fileupload.github.io/index.html
  https://www.npmjs.com/package/angular-material-fileupload

    API Firebase2 (BD)
    npm install @angular/fire firebase --save
   
    API Responsiva Material.io Angular
    npm i -s @angular/flex-layout @angular/cdk
    tamanho das telas
    https://github.com/angular/flex-layout/wiki/Responsive-API
    https://github.com/angular/flex-layout/blob/master/docs/documentation/fxLayoutAlign-API.md

    Add o material Designer no projeto:
    ng add @angular/material
    https://material.angular.io/guide/getting-started

   **Fantasma - ng-ghosts**
   https://github.com/SergioNoivak/ng-ghosts-loading

   carousel
   https://gsr.dev/material2-carousel/
   
   https://www.primefaces.org/primeng/showcase/#/carousel

    usando 17/05/20
   https://github.com/uiuniversal/ngu-carousel


## DESIGNER

https://colorhunt.co/

## PWA
instalando (necessário excluir instalação anterior)
    sudo ng add @angular/pwa

https://medium.com/@lucashenriquedeabreu
https://lucashenriqueabreu.github.io/PWATodo/PWATodo/
https://github.com/brunocantisano/PWAExample/tree/master/angular/PWATodo

DOCUMENTAÇÃO ANGULAR
https://angular.io/guide/service-worker-intro

Projeto em pwa Angular7
https://github.com/jaisonpereira/poc-pwa

documentação do google 
https://developers.google.com/web/tools/lighthouse/audits/registered-service-worker?utm_source=lighthouse&utm_medium=devtools


**PUSH NOTIFICATION**

ONESIGNAL
desenvolvimento cliente
sudo npm install ngx-onesignal --appId=[42e5d5f4-7b2a-4f2e-b6e2-ded7139361b5]

desenvolvimento gestor
sudo npm install ngx-onesignal --appId=[0572ae3a-7580-40ca-9310-ec4e99326fd3]

https://github.com/MSakamaki/ngx-onesignal

*OneSignal + Firebase*

## ICONES
icon-144x144: Icone do alerta para adicionar PWA(fundo transparente e tamanho pequeno)
icon-192x192: Icone de atalho no smartphone(fundo com cor e tamanho pequeno)
icon-384x384: icone para abrir aplicativo no pwa com fundo tranparente e tamanho grande

## EXECUÇÃO
Executando no browser Linux: sudo ng serve

## Git

EMPURRAR/COMMIT NO GIT
Para add todas as alterações na lista de commit
    --PRIMEIRO
        git add *
        Montando o pacote de commit com comentário
        git commit -m "Comentário!" - feito pelo vc code

        ou

        confirma via VS code

    --SEGUNDO
        Puch empurrando para o Git
            git push https://github.com/Kleber2018/dashboard.git master
        Vai pedir usuário e senha do Git

PARA BAIXAR/CLONAR DO GIT
    git clone -b cliente-kleber https://github.com/Kleber2018/delivery-cliente.git

Unir dois repositorios diferentes 
https://stackoverflow.com/questions/1425892/how-do-you-merge-two-git-repositories/10548919#10548919
    No repositório que deseja se unir Exemplo Lista1:
        git remote add Lista4-PHP https://github.com/Kleber2018/Lista4-PHP.git
        git fetch Lista4-PHP --tags
        git merge --allow-unrelated-histories Lista2-PHP/branchdorepositorio
    dar um push no vscode

## Mockup

Projeto para o desenvolvimento do dashboard do sistema de Delivery
https://www.figma.com/file/soRtPgb7wwsSCbIoPrv619/Delivery-app-projeto?node-id=0%3A1	

 ## TEMPLATE

 https://adorable.io/
#ec505f

Avatar:
https://api.adorable.io/avatars/list
{"face":{"eyes":["eyes1","eyes10","eyes2","eyes3","eyes4","eyes5","eyes6","eyes7","eyes9"],"nose":["nose2","nose3","nose4","nose5","nose6","nose7","nose8","nose9"],"mouth":["mouth1","mouth10","mouth11","mouth3","mouth5","mouth6","mouth7","mouth9"]}}

## Projetos similares no git

Clone story
https://stackblitz.com/edit/angular-wcstories
      

## ERROS CORREÇÃO

ERROR in multi ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.scss ./src/styles/styles.scss ./node_modules/firebaseui/dist/firebaseui.css
Module not found: Error: Can't resolve '/home/kleber/Angular/delivery-cliente/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.scss' in '/home/kleber/Angular/delivery-cliente'

--> altera a extenção para .css ou .scss no styles do arquivo angula.json


## BOAS PRÁTICAS

Alterando variavel diretamente no template:
      <button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
        {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
      </button>