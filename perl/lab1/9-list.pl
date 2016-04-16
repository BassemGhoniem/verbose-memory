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
print $list[int($n * rand())]."\n"
