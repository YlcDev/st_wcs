<?php

namespace App\Controller;


use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AdminController as EasyAdminController;




class AdminController extends EasyAdminController
{
    /**
     * @Route("/", name="easyadmin")
     */
    public function indexAction(Request $request)
    {
        return parent::indexAction($request);

    }

}
