@lines = ();
while (<>) {
  push @lines, $_;
}
while (@lines) {
  print pop @lines;
}

