print "give me temp: ";
chomp($tmp = <STDIN>);
if ($tmp > 35) {
  print "TOO HOT\n";
} elsif ($tmp >= 28) {
  print "JUST RIGHT\n"
} else {
  print "TOO COLD\n"
}
