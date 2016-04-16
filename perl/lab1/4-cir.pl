if (defined $ARGV[0]) {
  $cir = 2 * 3.14 * $ARGV[0];
  print $cir . "\n";
} else {
  print "USAGE: perl 4-cir.pl <r>\n"
}
