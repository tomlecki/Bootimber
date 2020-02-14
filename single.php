<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;

Timber::render( array( 'posts/single-' . $timber_post->ID . '.twig', 'posts/single-' . $timber_post->post_type . '.twig', 'posts/single.twig' ), $context );

