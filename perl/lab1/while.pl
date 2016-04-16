use strict;
use warnings;
use 5.010;
 
while (1) {
  print "Which programming language are you learning now? ";
  my $name = <STDIN>;
  chomp $name;
  if ($name eq 'Perl') {
    last;
  }
  say 'Wrong! Try again!';
}
say 'done';
