<?php
  global $post;
/*
  Template Name: Home
*/
/**
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Henderson Physiotherapy
 */
/****************************

 * QUERY FEATURED RECIPES

 ***************************/
$newsArgs = [
  'post_type'      => 'news',
  'post_status'    => 'publish',
  'posts_per_page' => 5,
  // 'order' => 'ASC',
];



/****************************************************
 * STORE ALL LOGIC IN CONTEXT AND OUTPUT TO VIEW
 ***************************************************/
$context = Timber::context();
$context['field'] = new Timber\Post();
$context['news'] = Timber::get_posts($newsArgs);
$templates = array( 'page-home.twig' );
Timber::render( $templates, $context );





