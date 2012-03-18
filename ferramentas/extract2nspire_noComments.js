// Macro recorded on: Sat Mar 10 2012 21:38:38 GMT+0000 (GMT Standard Time)
komodo.assertMacroVersion(3);
if (komodo.view) { komodo.view.setFocus(); }
ko.commands.doCommand('cmd_documentHome')
ko.commands.doCommand('cmd_selectLineNext')
ko.commands.doCommand('cmd_selectLineNext')
ko.commands.doCommand('cmd_delete')
ko.commands.doCommand('cmd_documentEnd')
ko.commands.doCommand('cmd_selectLinePrevious')
ko.commands.doCommand('cmd_delete')
ko.commands.doCommand('cmd_documentHome')
ko.find.replaceAllInMacro(window, 0, '^©.*\\r\\n', '', false, 2, 0, false, false);
ko.commands.doCommand('cmd_selectAll')
ko.commands.doCommand('cmd_copy')
ko.commands.doCommand('cmd_undo')
ko.commands.doCommand('cmd_undo')