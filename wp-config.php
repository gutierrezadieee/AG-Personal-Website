<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'agutierrez_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Pml}[;hGLY2wGC6g*ZeariMItZ[7F^yQrluk6?c{1*<<r9(TAK#bUCD82iC_I5l|' );
define( 'SECURE_AUTH_KEY',  'R0A-@OY7u#>/:&%{6/cLXjD1nHOboi[E[{v:d-7U#EV@}X4,&H`&rmpHBJm+*EKT' );
define( 'LOGGED_IN_KEY',    '5ljF<Pbf$x_a1f4OwBb9&;&E56f/Zvj7~)yJl/,p}cg9kxN$Gp]1V9@K5Mi)Vr0#' );
define( 'NONCE_KEY',        '$=!_3hmU4j$vMV|5~/Gnv1F>WtpPnp.<C*P_3ypc*@7s}]dMii`d^~!jJMY`|l,H' );
define( 'AUTH_SALT',        'xz:&-69jx2PlK<Iu_HgN4SQC668[3KcS-Ex|n>qwQq67L49MS&g9NNt;t$5TKl(=' );
define( 'SECURE_AUTH_SALT', 'f,M|?qB6$3(*)(I#S$l_0EB.oXI:KM-lrJa-&ID2&+s+J(jC(IQ~9LUsb;!Y6RPa' );
define( 'LOGGED_IN_SALT',   'WOTVL.D}zPfs%52SD=-DT<fWz.WJryd(Fg~tRYqCxTB%0N?o0t/s6(!Ja*P1:Gou' );
define( 'NONCE_SALT',       'klLS%WikQFcxC}>bx$<@:;JQ;:Zm]J.=ve7ZaFmnynDd2^^,>3Na ?O!)&Rh2WeZ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
