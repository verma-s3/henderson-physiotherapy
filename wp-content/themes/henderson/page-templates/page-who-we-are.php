<?php
  global $post;
/*
  Template Name: Who We Are
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
$templates = array( 'page-who-we-are.twig' );
Timber::render( $templates, $context );



