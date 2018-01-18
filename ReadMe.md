# Prérequis:

* Composer 1.5.6

* Php >= 7.1

# Clonage et installation:

* git clone ce dossier
* entrer dans le dossier
* composer install
* configurer le fichier .env en racine du projet (DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name)
* php bin/console doctrine:database:create
* php bin/console doctrine:schema:update --force
* php bin/console doctrine:fixtures:load
* php bin/console server:run
* ouvrir le navigatuer a l'URL donnée.