<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;


/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleRepository")
 * @Vich\Uploadable
 */
class Article
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="string", length=255)
     */
    protected $title;

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="text")
     */
    protected $content;

    /**
     * @Assert\NotBlank()
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="usernameCanonical")
     * @ORM\JoinColumn(name="user_canonical")
     **/
    private $user;

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="datetime")
     */
    protected $updatedAt;

    /**
     * @return mixed
     * @ORM\Column(type="string")
     */
    protected $image;

    /**
     * @return mixed
     * @Vich\UploadableField(mapping="article_images", fileNameProperty="image")
     * @var File
     */
    protected $imageFile;


    public function __construct()
    {

        $this->updatedAt = new \DateTime();
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    public function getContent()
    {
        return $this->content;
    }

    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTime $updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    public function getImageFile()
    {
        return $this->imageFile;
    }

    public function setImageFile($image)
    {
        $this->imageFile = $image;
    }

}
