if (defined $ARGV[0] and defined $ARGV[1]) {
  $times = int $ARGV[0];
  $str = $ARGV[1] x $times;
  print $str . "\n";
} else {
  print "USAGE: perl 6-str.pl <n> <str>\n"
}
