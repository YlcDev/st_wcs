<?php

namespace App\Controller;

use App\Entity\Article;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;

class BlogController extends Controller
{
    /**
     * @Route("/blog", name="blog")
     */
    public function index(EntityManagerInterface $em)
    {
        $articles = $em->getRepository(Article::class)->findAll();
        return $this->render('blog/blog.html.twig', array(
            'articles' => $articles
        ));
    }
}
