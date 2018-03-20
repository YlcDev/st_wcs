<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Common\Annotations\Annotation;

class FrontPageController extends Controller
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('frontpage/index.html.twig');
    }

    /**
     * @Route("/societe", name="societe")
     */
    public function societe()
    {
        return $this->render('frontpage/societe.html.twig');
    }

    /**
     * @Route("/competences", name="competences")
     */
    public function competences()
    {
        return $this->render('frontpage/competences.html.twig');
    }

    /**
     * @Route("/service", name="service")
     */
    public function service()
    {
        return $this->render('frontpage/service.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->render('frontpage/contact.html.twig');
    }
}