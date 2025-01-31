<?php
/**
 * Sample Results Template
 *
 * This template is an absolute base example showing you what
 * you can do, for more customisation see the WordPress docs
 * and using template tags.
 *
 * http://codex.wordpress.org/Template_Tags
 */

// If this file is called directly, abort.
if (!defined('ABSPATH')) {
	exit;
}

if (!isset($query)) {
	return;
}

if ($query->have_posts()) {

	$paged = isset($query->query['paged']) ? $query->query['paged'] : 1;
	?>

	<!-- Keep the `.search-filter-query-posts` class to support the load more button -->
	<div class="search-filter-query-posts">
		<?php
		while ($query->have_posts()) {
			$query->the_post();

			?>
			<div class="news-result-div">
				<h2><?php esc_html(the_title()); ?></h2>
				<div class="image-section">
					<?php
					if (has_post_thumbnail()) {
						the_post_thumbnail('small');
					}
					?>

				</div>
				<div class="content">
					<?php echo wp_trim_words(get_field('news_content'), 30, '...'); ?>
				</div>
				<div class="btn">
					<a href="<?php esc_attr(the_permalink()); ?>" class="reverse-btn"
						aria-label="<?php esc_html(the_title()); ?>">Learn More</a>
				</div>
			</div>
			<?php
		}
		wp_reset_postdata();
		?>
	</div>

	<?php
} else {
	echo '<p class="no-result-text center">No Results Found</p>';
}
?>