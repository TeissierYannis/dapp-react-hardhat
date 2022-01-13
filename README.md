# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```

Projet : 

- [ ] Des personnages avec des compétences et des niveaux :
    - Niveau de compétence de base : 1 
    - Niveau de compétence max : 100
    - Niveau de base : 1
    - Niveau max : 100
- [ ] Des items augmentant les stats
    - [ ] Un item augmentant la vie
    - [ ] Un item augmentant la force
    - [ ] Un item augmentant la magie
    - [ ] Un item augmentant la vitesse
    - [ ] Un item augmentant la precision
    - [ ] Un item augmentant la resistance
    - [ ] Un item augmentant la chance
- [ ] Coffre gratuit avec des items tout les 10|5 niveaux
- [ ] Possiblité de faire une sauvegarde sur la bc
- [ ] Compte lié à metamask
- [ ] Adversaire compris entre +- 10% de son niveau
- [ ] 3 combats par jour (pas la même personne) (possibilité d'acheter 1 combat par jour)
- [ ] En cas de défaite : 
  - Gain de 1 xp
- [ ] En cas de victoire : 
  - Gain de 2 xp
  - Gain de X coins
- [ ] En cas de level up : 
  - Gain de 1 niveau
  - Gain de X coins
  - Gain de 1 bonus pour X combats


Déroulement depuis inscription :

1. Inscription avec metamask
2. Paiement du coffre avec le personnage aléatoire
3. Ouverture du coffre
4. Possibilité de jouer X combats
5. Sauvegarde sur la blockchain (a voir, moyen de tricher)
6. Possibilité d'acheter des coffres