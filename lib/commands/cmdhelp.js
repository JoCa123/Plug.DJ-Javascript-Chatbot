// Generated by CoffeeScript 1.4.0
var cmdHelpCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

cmdHelpCommand = (function(_super) {

  __extends(cmdHelpCommand, _super);

  function cmdHelpCommand() {
    return cmdHelpCommand.__super__.constructor.apply(this, arguments);
  }

  cmdHelpCommand.prototype.init = function() {
    this.command = '/cmdhelp';
    this.parseType = 'startsWith';
    return this.rankPrivelege = 'user';
  };

  cmdHelpCommand.prototype.functionality = function() {
    var msg, param, resp;
    msg = this.msgData.message;
    resp = '';
    if (msg.length > 9) {
      param = msg.substring(9);
      switch (param) {
        case "hugs pup":
          resp = "You give me a hug!";
          break;
        case "rapes pup":
          resp = "er... thats... not a command... please";
          break;
        case "taco":
          resp = "order a yummy taco.  simply say 'taco' or give on to someone else by saying 'taco @user'";
          break;
        case "cookie":
          resp = "Mod only command.  Reward a user with a sweet treat!  Syntax: cookie @user";
          break;
        case "punish":
          resp = "Mod only command.  Punish a user in one of several methods.  For naughty users.  Syntax: punish @user";
          break;
        case "/newsongs":
          resp = "find new songs by checking out one of 40+ dubstep channels that post new music daily";
          break;
        case "/whywoot":
          resp = "DJ all day without throwing your life away clicking woot every 3 minutes.  Learn how and get the necessary tools";
          break;
        case "/theme":
          resp = "Learn what genres of music are generally accepted here.  Don't forget to check if your song is in /overplayed though";
          break;
        case "/rules":
          resp = "Room rules.  Duh";
          break;
        case "/roomhelp":
          resp = "Information about the room for the newer folk.";
          break;
        case "/source":
          resp = "About the bot and the code that produced it";
          break;
        case "/sourcecode":
          resp = "About the bot and the code that produced it";
          break;
        case "/author":
          resp = "About the bot and the code that produced it";
          break;
        case "/woot":
          resp = "Remind users to hit woot so they don't get removed.  either type /woot or /woot @user";
          break;
        case ".128":
          resp = "Mod only command. Flags songs that are bad quality.";
          break;
        case "/tableflip":
          resp = "... flips a table";
          break;
        case "/tablefix":
          resp = "... fixes a table";
          break;
        case "/download":
          resp = "Provides a link to find downloads of mp3 of current song";
          break;
        case "/smokesesh":
          resp = "For when ya just wanna get high";
          break;
        case "/smoke":
          resp = "doobies";
          break;
        case "/dab":
          resp = "WOLVES uses this";
          break;
        case "/afks":
          resp = "List current DJs on deck that haven't chatted or voted in 5+ minutes";
          break;
        case "/allafks":
          resp = "List all users in room that haven't chatted or voted in 10+ minutes";
          break;
        case "/status":
          resp = "Uptime and total song stats";
          break;
        case "/unhook events all":
          resp = "Host only command.  It's complicated";
          break;
        case "/die":
          resp = "Host only command. Makes bot go bye bye";
          break;
        case "/reload":
          resp = "Host only command. Reload pup's script";
          break;
        case "/lock":
          resp = "Mod only command. Locks booth";
          break;
        case "/unlock":
          resp = "Mod only command. Unlocks booth";
          break;
        case "/overplayed":
          resp = "Links users to our overplayed song list";
          break;
        case "/whymeh":
          resp = "Explains to users why they should be mehing every song";
          break;
        case "/skip":
          resp = "Mod only command.  Skips song.  Works for skipping invisible DJs.";
          break;
        case "/commands":
          resp = "Lists all commands.  Will only list commands available to caller's user class (user, mod, or host)";
          break;
        case "/resetafk":
          resp = "Mod only command.  Resets AFK timer for user.  Syntax: /resetafk @USER";
          break;
        case "/forceskip":
          resp = "Host only command.  Make pup skip songs when they are supposed to end (addresses triangles of death issue). Syntax: /forceskip [enable|disable]";
          break;
        case "/fb":
          resp = "Links to Dubstep Den's facebook page";
          break;
        case "/uservoice":
          resp = "Links to Dubstep Den's uservoice page";
          break;
        case "/dclookup":
          resp = "Mod only command.  Looks up user for a log of their last disconnect. Syntax: /dclookup @USER";
          break;
        case "/reminder":
          resp = "Mod only command.  Set reminder for x songs from now.  For users that dc'd mainly.  Syntax: /reminder \"MSG\" [numsongs]";
          break;
        case "/voteratio":
          resp = "Mod only command.  See woot & meh count for user since bot launch.  Syntax: /voteratio @USER";
          break;
        case "/avgvoteratio":
          resp = "Mod only command.  See average voting ratio of every present user in room. Syntax: /avgvoteratio";
          break;
        case "/cmdhelp":
          resp = "Looks like you got it down";
          break;
        case "/pop":
          resp = "Mod only command.  Removes last person on deck";
          break;
        case "/push":
          resp = "Mod only command.  Puts user on deck. Syntax: /push @user";
          break;
        default:
          resp = "That is nothing.  That is not a thing.";
      }
    } else {
      resp = "Use this command to learn how use other commands.  Syntax: /cmdhelp [/CMD]";
    }
    return API.sendChat(resp);
  };

  return cmdHelpCommand;

})(Command);
