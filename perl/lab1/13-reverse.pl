print "this progrm reads a list type x when done\n";
@list = ();
while (<>) {
  if ($_ eq "\n"){
    last;
  }
  unshift @list, $_;
}
print join ('', @list)
