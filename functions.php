<?php
/**
 * Functions file for the Twenty Twenty MARIONA default theme.
 *
 */


/**
 * Enqueues scripts and styles for the frontend
 */
function mariona_enqueue_assets() {
	wp_enqueue_script( 'mariona-js', get_stylesheet_directory_uri() . '/marionavilaros.js', [], '1.0', true );
}
add_action( 'wp_enqueue_scripts','mariona_enqueue_assets' );

function mariona_page_template( $template ) {
	if ( is_page() && ! empty( $_COOKIE['visited'] ) && ! empty( $_GET['develop'] ) ) {
		$template = get_stylesheet_directory() . '/templates/template-full-width.php';
	}
	return $template;
}
add_filter( 'page_template', 'mariona_page_template' );

function mariona_theme_support() {
	// Add custom image size used in Cover Template.
	add_image_size( 'mariona-fullscreen', 2600, 9999 );

}
add_action( 'after_setup_theme', 'mariona_theme_support' );
