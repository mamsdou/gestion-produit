# GestionProduit

Correction du merge request


## Points soulignés

- externalisation des traitements sous forme de services
- creation d'un fichier pour les urls pour les rendre dynnamique
- création d'un fichier json qui se situe dans le dossier assets/info.json
- externnalisation de l'interface Info 
- ajout des propriétés dans l'interface: commentaires, couleur et materiaux 
## Architecture projet
- app: dossier du projet angular contenu dans src
  - componnents: conntient les différents composants angular
    - produit: composant produit
  - services : conntient les différents serices métiers
  - assets: chargelents de fichiers css, etc..
  - environments: on peut y mettre les différenst urls
- package.json: fichier de dependances utilisés dans le projet  
