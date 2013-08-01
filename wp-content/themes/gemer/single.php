<?php get_header(); ?>

<!-- BEGIN content -->
<div id="content">

	<?php if (have_posts()) : the_post(); ?>
	<!-- begin post -->
	<div class="single">
	<h2><?php the_title(); ?></h2>
	<?php the_content(); ?>
    <p><?php the_tags(); ?></p>
	</div>
	<!-- end post -->
	

</div>
<!-- END content -->

<?php get_sidebar(); get_footer(); ?>
