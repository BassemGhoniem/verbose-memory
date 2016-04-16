%words =();
while (1) {
  print " ? ";
  my $name = <STDIN>;
  chomp $name;
  if ($name eq "eof"){
    last;
  }
  $words{$name}++;
}
while (($key,$value) = each(%words)) {
  print "$key :   $value\n";
}

