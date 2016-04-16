if(!defined($ARGV[0])){
  print "usage perl 8-list <n>\n";
} else {
  @list = ();
  $n = int($ARGV[0]);

  for ($i = 0; $i < $n; $i++) {
  chomp($input = <STDIN>);
    push @list, $input;
  }
}
while (1) {

  print "\nchoose a line to print\n";
  $index = <STDIN>;
  if ($index eq "\n" ) {
    last;
  }
  $index = int($index);
  print $list[$index]
}
