<?php
  global $post;
/*
  Template Name: What We Do
*/
/**
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Henderson Physiotherapy
 */
/****************************************************
 * STORE ALL LOGIC IN CONTEXT AND OUTPUT TO VIEW
 ***************************************************/
$context = Timber::context();
$context['field'] = new Timber\Post();
$templates = array( 'page-what-we-do.twig' );
Timber::render( $templates, $context );



