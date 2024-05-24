#Created by newuser for 5.9
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

export HISTFILE="$XDG_CONFIG_HOME/zsh/.zsh_history"

source $HOME/.config/zsh/

[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

nitch
