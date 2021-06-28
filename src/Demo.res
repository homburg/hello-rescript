type rxObservable<'t>;

@genType.import("rxjs")
external rxFrom: (. Js.Array.t<'a>) => rxObservable<'a> = "from";

@genType.import("rxjs/operators")
external rxMap: (.
    ('i) => 'o) => (.
    rxObservable<'i>) => rxObservable<'o> = "map"

@send external subscribe: (rxObservable<'a>, 'a => unit) => unit = "subscribe"


let doIt = (~stream: 's) => 
    stream
  ->rxMap(.(n => n * 2))(. _)
 ->subscribe(Js_console.log)

Js_console.log(rxFrom);
Js_console.log(rxMap);
Js_console.log(Js.String2.make(rxFrom))
Js_console.log(Js.String2.make(rxMap))
let stream = rxFrom(. [1, 2, 3])
Js_console.log(stream);
Js_console.log(Js.String2.make(doIt));
Js_console.log(doIt(~stream))

// rxOf(1, 2, 3)
