<?php

/**
 * Created by PhpStorm.
 * User: troll
 * Date: 18/01/18
 * Time: 21:50
 */

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername('root');
        $user->setEmail('root@localhost.fr');
        $user->setEnabled(1);
        $user->setPlainPassword('root');
        $user->setRoles(array('ROLE_ADMIN'));

        $manager->persist($user);
        $manager->flush();

    }

}