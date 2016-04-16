if (defined $ARGV[0] and defined $ARGV[1]) {
  $cir = $ARGV[1] * $ARGV[0];
  print $cir . "\n";
} else {
  print "USAGE: perl 5-mul.pl <x> <y>\n"
}
